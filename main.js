const elements = document.querySelectorAll("*")

const staticUtils = {
    "chai-flex": { display: "flex" },
    "chai-items-center": { alignItems: "center" },
    "chai-justify-center": { justifyContent: "center" },

    "chai-text-center": { textAlign: "center" },
    "chai-fw-bold": { fontWeight: "bold" },
    "chai-text-red": { color: "red" },
    "chai-text-orange": { color: "orange" },
    "chai-text-white": { color: "white" },
    "chai-text-gray": { color: "#bbbbbb" },
    "chai-bg-dark": { backgroundColor: "#1a1a1a" },

    "chai-flex-col": { flexDirection: "column" },
    "chai-flex-row": { flexDirection: "row" },
    "chai-gap-10": { gap: "10px" },
    "chai-block": { display: "block" },

    "chai-shadow-sm": { boxShadow: "0 2px 4px rgba(0,0,0,0.1)" },
    "chai-shadow-md": { boxShadow: "0 6px 10px rgba(0,0,0,0.15)" },

    "chai-mx-auto": { margin: "auto" },
};

const rules = [
    {
        prefix: "chai-p-",
        property: "padding",
        validate: (v) => !isNaN(v),
        transform: (v) => v + "px"
    },
    {
        prefix: "chai-m-",
        property: "margin",
        validate: (v) => !isNaN(v),
        transform: (v) => v + "px"
    },
    {
        prefix: "chai-mt-",
        property: "marginTop",
        validate: (v) => !isNaN(v),
        transform: (v) => v + "px"
    },
    {
        prefix: "chai-font-",
        property: "fontSize",
        validate: (v) => !isNaN(v),
        transform: (v) => v + "px"
    },
    {
        prefix: "chai-bg-",
        property: "backgroundColor",
        validate: () => true,
        transform: (v) => v
    },
    {
        prefix: "chai-w-",
        property: "width",
        validate: (v) => !isNaN(v),
        transform: (v) => v + "px"
    },
    {
        prefix: "chai-h-",
        property: "height",
        validate: (v) => !isNaN(v),
        transform: (v) => v + "px"
    },
    {
        prefix: "chai-border-",
        property: "border",
        validate: (v) => !isNaN(v),
        transform: (v) => `${v}px solid black`
    },
    {
        prefix: "chai-rounded-",
        property: "borderRadius",
        validate: (v) => !isNaN(v),
        transform: (v) => v + "px"
    },
];

function parseClass(cl) {
    for (let rule of rules) {
        if (cl.startsWith(rule.prefix)) {
            const value = cl.slice(rule.prefix.length);

            if (!rule.validate(value)) return null;

            return {
                property: rule.property,
                value: rule.transform(value)
            };
        }
    }
    return null;
}

elements.forEach((el) => {
    const styleMap = {};

    [...el.classList].forEach((cl) => {
        if (!cl.startsWith("chai-")) return;

        // STATIC
        if (staticUtils[cl]) {
            Object.assign(styleMap, staticUtils[cl]);
        } else {
            // DYNAMIC
            const parsed = parseClass(cl);
            if (parsed) {
                styleMap[parsed.property] = parsed.value;
            }
        }

        el.classList.remove(cl);
    });

    Object.assign(el.style, styleMap);
});