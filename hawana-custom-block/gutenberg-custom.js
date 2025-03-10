wp.blocks.registerBlockType('hawana-custom-block/custom-block',{
    title: 'Company Contact Information',
    icon: 'book',
    category: 'design',
    attributes: {
        companyName: { type: 'string'},
        companyPhone: {type: 'string'},
        companyAddress: {type: 'string'},
        companyAddress2: {type: 'string'},
        companyCity: {type: 'string'},
        companyState: {type: 'string'},
        companyZip: {type: 'string'},
    },
    edit: function(props){
        return React.createElement(
            "div",
            { style: { display: "grid", gridTemplateColumns: "1fr", gap: "10px", padding: "10px" } },
            React.createElement("label", { style: { gridColumn: "span 2" } }, "Company Name"),
            React.createElement("input", {
                type: "text",
                value: props.attributes.companyName,
                placeholder: "Company Name",
                onChange: (event) => props.setAttributes({ companyName: event.target.value }),
                style: { gridColumn: "span 2" }
            }),
        
            React.createElement("label", null, "Company Phone"),
            React.createElement("input", {
                type: "text",
                value: props.attributes.companyPhone,
                placeholder: "Company Phone",
                onChange: (event) => props.setAttributes({ companyPhone: event.target.value }),
            }),
        
            React.createElement("label", null, "Company Address"),
            React.createElement("input", {
                type: "text",
                value: props.attributes.companyAddress,
                placeholder: "Company Address",
                onChange: (event) => props.setAttributes({ companyAddress: event.target.value }),
            }),
        
            React.createElement("label", null, "Company Address Line 2"),
            React.createElement("input", {
                type: "text",
                value: props.attributes.companyAddress2,
                placeholder: "Company Address Line 2",
                onChange: (event) => props.setAttributes({ companyAddress2: event.target.value }),
            }),
        
            React.createElement("label", null, "Company City"),
            React.createElement("input", {
                type: "text",
                value: props.attributes.companyCity,
                placeholder: "Company City",
                onChange: (event) => props.setAttributes({ companyCity: event.target.value }),
            }),
        
            React.createElement("label", null, "Company State"),
            React.createElement("input", {
                type: "text",
                value: props.attributes.companyState,
                placeholder: "Company State",
                onChange: (event) => props.setAttributes({ companyState: event.target.value }),
            }),
        
            React.createElement("label", null, "Company Zipcode"),
            React.createElement("input", {
                type: "text",
                value: props.attributes.companyZip,
                placeholder: "Company Zipcode",
                onChange: (event) => props.setAttributes({ companyZip: event.target.value }),
            })
        );
        
    },
    save: function(props) {
        return React.createElement(
            "div",
            { className: "company-contact-info" },
            React.createElement("h3", null, "Company Contact Information"),
            React.createElement("p", null, React.createElement("strong", null, "Company Name: "), props.attributes.companyName),
            React.createElement("p", null, React.createElement("strong", null, "Company Phone: "), props.attributes.companyPhone),
            React.createElement("p", null, React.createElement("strong", null, "Company Address: "), props.attributes.companyAddress),
            props.attributes.companyAddress2 && React.createElement("p", null, React.createElement("strong", null, "Address Line 2: "), props.attributes.companyAddress2),
            React.createElement("p", null, React.createElement("strong", null, "Company City: "), props.attributes.companyCity),
            React.createElement("p", null, React.createElement("strong", null, "Company State: "), props.attributes.companyState),
            React.createElement("p", null, React.createElement("strong", null, "Company Zipcode: "), props.attributes.companyZip)
        );
    }
    
})