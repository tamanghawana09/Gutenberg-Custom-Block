const { registerBlockType } = wp.blocks;
const { Button, TextControl, PanelBody } = wp.components;
const { InspectorControls, useBlockProps, MediaUpload } = wp.blockEditor;
const { createElement } = wp.element;

registerBlockType('hawana-slider/slider-block', {
    title: 'Swiper Slider Block',
    icon: 'slides',
    category: 'design',

    attributes: {
        slides: {
            type: 'array',
            default: []
        },
        autoplay: {
            type: 'boolean',
            default: true,
        },
        autoplaySpeed: {
            type: 'number',
            default: 3000,
        },
        loop: {
            type: 'boolean',
            default: true,
        },
        effect: {
            type: 'string',
            default: 'slide',
        },
        speed: {
            type: 'number',
            default: 500,
        },
        navigation: {
            type: 'boolean',
            default: true,
        },
        pagination: {
            type: 'boolean',
            default: true,
        },
        paginationType: {
            type: 'string',
            default: 'bullets',
        },
        slidesPerView: {
            type: 'number',
            default: 1,
        },
        spaceBetween: {
            type: 'number',
            default: 10,
        },
        backgroundColor: {
            type: 'string',
            default: '#ffffff',
        },
        typography: {
            type: 'object',
            default: {
                fontSize: '16px',
                fontWeight: '400',
                color: '#000000',
            },
        },
        icon: {
            type: 'string',
            default: 'fas fa-star'
        },
    },

    edit: function({ attributes, setAttributes }) {
        const { slides } = attributes;

        // Add slide code
        const addSlide = () => {
            setAttributes({ slides: [...slides, { image: '', caption: '' }] });
        };

        // Update slide code
        const updateSlide = (index, key, value) => {
            setAttributes({
                slides: slides.map((slide, i) => (i === index ? { ...slide, [key]: value } : slide)),
            });
        };

        // Remove slide code
        const removeSlide = (index) => {
            const newSlides = slides.filter((_, i) => i !== index);
            setAttributes({ slides: newSlides });
        };

        return createElement(
            'div',
            useBlockProps(),
            createElement(
                InspectorControls,
                null,
                createElement(
                    PanelBody,
                    { title: 'Slides' },
                    slides.map((slide, index) =>
                        createElement(
                            'div',
                            { key: index, className: 'slide-control' },
                            createElement(MediaUpload, {
                                render: function({ open }) {
                                    return createElement(
                                        'div',
                                        {className :'image-upload-wrapper'},
                                        slide.image && 
                                            createElement('img',{
                                                src: slide.image,
                                                alt: 'Slide',
                                                style: {width: '100%' , marginBottom: '10px'}
                                            }),
                                            createElement(
                                                Button,
                                                
                                                {   onClick: open, 
                                                    className: 'button',
                                                    style: { alignItems: 'flex-start' } 
                                                },
                                                'Upload Image'
                                            )
                                    );
                                },
                                onSelect: (media) => updateSlide(index, 'image', media.url),
                                allowedTypes: ['image']
                                
                            }),
                            createElement(TextControl, {
                                label: 'Slide ' + (index + 1) + ' Caption',
                                value: slide.caption,
                                style: {width: '100%'},
                                onChange: (value) => updateSlide(index, 'caption', value)
                            }),
                            createElement(
                                Button,
                                { onClick: () => removeSlide(index), isDestructive: true },
                                'Remove Slide'
                            )
                        )
                    ),
                    createElement(
                        Button,
                        { onClick: addSlide, variant: 'primary', style: { marginTop: '10px' } },
                        'Add Slides'
                    )
                )
            ),
            createElement(
                'div',
                { className: 'preview' },
                slides.length === 0
                    ? createElement('p', null, 'No slides added. Use the settings panel to add slides.')
                    : slides.map((slide, index) =>
                        createElement(
                            'div',
                            { key: index, style: { textAlign: 'center', marginBottom: '10px' } },
                            slide.image && createElement('img', { src: slide.image, alt: 'Slide Preview', width: '100%',height: '100%' }),
                            slide.caption && createElement('p', null, slide.caption)
                        )
                    )
            )
        );
    },

    save: function({ attributes }) {
        const { slides } = attributes;
    
        return createElement(
            'div',
            { className: 'swiper-container', style: { backgroundColor: attributes.backgroundColor } },
            createElement(
                'div',
                { className: 'swiper-wrapper' },
                slides.map(function(slide, index) {
                    return createElement(
                        'div',
                        { key: index, className: 'swiper-slide' },
                        slide.image && createElement('img', { src: slide.image, alt: 'Slide ' + (index + 1) }),
                        slide.caption && createElement('p', null, slide.caption)
                    );
                })
            ),
            // Optional Swiper navigation and pagination
            attributes.navigation && createElement('div', { className: 'swiper-button-next' }),
            attributes.navigation && createElement('div', { className: 'swiper-button-prev' }),
            attributes.pagination && createElement('div', { className: 'swiper-pagination' })
        );
    }
    
});
