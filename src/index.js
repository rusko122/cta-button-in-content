const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

registerBlockType("cta-button-in-content/button", {
    title: "Simple CTA Button",
    icon: "button",
    category: "common",
    attributes: {
        buttonText: {
            type: "string",
            default: "Vreau o programare",
        },
    },
    example: {
        attributes: {
            buttonText: "Vreau o programare",
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const { buttonText } = attributes;

        return (
            <div className="wp-block-cta-button-in-content">
                <a href="#" className="button">
                    <RichText
                        tagName="span"
                        value={buttonText}
                        onChange={(newText) => setAttributes({ buttonText: newText })}
                        placeholder="Adaugă textul butonului..."
                    />
                    <img
                        src="/wp-content/themes/clinica-trident/assets/icons/arrow-right-white.svg"
                        alt="Arrow Icon"
                    />
                </a>
            </div>
        );
    },
    save: ({ attributes }) => {
        const { buttonText } = attributes;

        return (
            <div className="wp-block-cta-button-in-content">
                <a href="http://clinica-trident/programare-online/" className="button button--large button--accent button--icon button--icon-right button--fit-content">
                    <span>{buttonText}</span>
                    <img
                        src="/wp-content/themes/clinica-trident/assets/icons/arrow-right-white.svg"
                        alt="Arrow Icon"
                    />
                </a>
            </div>
        );
    },
});


registerBlockType("cta-button-in-content/phone-number", {
    title: "Phone Number Button",
    icon: "phone",
    category: "common",
    attributes: {
        phoneNumber: {
            type: "string",
            default: "0310.050.934", // Default phone number
        },
    },
    description: "A clickable phone number with a phone icon.",
    example: {
        attributes: {
            phoneNumber: "0310.050.934",
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const { phoneNumber } = attributes;

        return (
            <div className="wp-block-cta-phone-number">
                <a href="#" className="phone-button-content">
                    <img
                        src="/wp-content/themes/clinica-trident/assets/icons/phone-outline-accent.svg"
                        alt="Phone Icon"
                        style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "8px",
                        }}
                    />
                    <RichText
                        tagName="span"
                        value={phoneNumber}
                        onChange={(newNumber) => setAttributes({ phoneNumber: newNumber })}
                        placeholder="Introduceți numărul de telefon..."
                        style={{
                            fontSize: "20px",
                            fontWeight: "normal",
                            color: "#1699DB",
                        }}
                    />
                </a>
            </div>
        );
    },
    save: ({ attributes }) => {
        const { phoneNumber } = attributes;

        return (
            <div className="wp-block-cta-phone-number">
                <a href={`tel:${phoneNumber.replace(/\./g, "")}`} className="phone-button-content">
                    <img
                        src="/wp-content/themes/clinica-trident/assets/icons/phone-outline-accent.svg"
                        alt="Phone Icon"
                    />
                    <span>{phoneNumber}</span>
                </a>
            </div>
        );
    },
});