export class ChaiEngine {
    constructor() {
        this.staticUtils = {
            // Layout & Display
            "chai-flex": { display: "flex" },
            "chai-grid": { display: "grid" },
            "chai-block": { display: "block" },
            "chai-inline": { display: "inline" },
            "chai-inline-block": { display: "inline-block" },
            "chai-hidden": { display: "none" },
            "chai-relative": { position: "relative" },
            "chai-absolute": { position: "absolute" },
            "chai-fixed": { position: "fixed" },
            "chai-sticky": { position: "sticky", top: "0" },

            // Flex & Grid Alignment
            "chai-items-center": { alignItems: "center" },
            "chai-items-start": { alignItems: "flex-start" },
            "chai-items-end": { alignItems: "flex-end" },
            "chai-justify-center": { justifyContent: "center" },
            "chai-justify-between": { justifyContent: "space-between" },
            "chai-justify-around": { justifyContent: "space-around" },
            "chai-flex-col": { flexDirection: "column" },
            "chai-flex-row": { flexDirection: "row" },
            "chai-flex-wrap": { flexWrap: "wrap" },
            "chai-grow": { flexGrow: "1" },
            "chai-shrink-0": { flexShrink: "0" },

            // Typography & Decoration
            "chai-text-center": { textAlign: "center" },
            "chai-text-left": { textAlign: "left" },
            "chai-text-right": { textAlign: "right" },
            "chai-fw-bold": { fontWeight: "bold" },
            "chai-italic": { fontStyle: "italic" },
            "chai-uppercase": { textTransform: "uppercase" },
            "chai-underline": { textDecoration: "underline" },
            "chai-antialiased": { webkitFontSmoothing: "antialiased" },

            // Visuals & Behavior
            "chai-overflow-hidden": { overflow: "hidden" },
            "chai-overflow-auto": { overflow: "auto" },
            "chai-object-cover": { objectFit: "cover" },
            "chai-object-contain": { objectFit: "contain" },
            "chai-cursor-pointer": { cursor: "pointer" },
            "chai-select-none": { userSelect: "none" },

            // Colors (Standard Palette)
            "chai-text-red": { color: "#ef4444" },
            "chai-text-blue": { color: "#3b82f6" },
            "chai-text-green": { color: "#22c55e" },
            "chai-text-white": { color: "#ffffff" },
            "chai-text-black": { color: "#000000" },
            "chai-text-gray": { color: "#94a3b8" }
        };

        this.rules = [
            // 1. Spacing (Padding)
            { prefix: "chai-px-", property: "paddingInline", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-py-", property: "paddingBlock", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-pt-", property: "paddingTop", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-pb-", property: "paddingBottom", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-pl-", property: "paddingLeft", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-pr-", property: "paddingRight", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-p-", property: "padding", validate: (v) => !isNaN(v), transform: (v) => v + "px" },

            // 2. Spacing (Margin)
            { prefix: "chai-mx-", property: "marginInline", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-my-", property: "marginBlock", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-mt-", property: "marginTop", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-mb-", property: "marginBottom", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-ml-", property: "marginLeft", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-mr-", property: "marginRight", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-m-", property: "margin", validate: (v) => !isNaN(v), transform: (v) => v + "px" },

            // 3. Sizing & Layout
            { prefix: "chai-w-", property: "width", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-h-", property: "height", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-max-w-", property: "maxWidth", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-min-w-", property: "minWidth", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-gap-", property: "gap", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-cols-", property: "gridTemplateColumns", validate: (v) => !isNaN(v), transform: (v) => `repeat(${v}, minmax(0, 1fr))` },

            // 4. Typography
            { prefix: "chai-font-", property: "fontSize", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-leading-", property: "lineHeight", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-tracking-", property: "letterSpacing", validate: (v) => !isNaN(v), transform: (v) => v + "px" },

            // 5. Borders & Styling
            { prefix: "chai-rounded-", property: "borderRadius", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-opacity-", property: "opacity", validate: (v) => !isNaN(v), transform: (v) => v / 100 },
            { prefix: "chai-z-", property: "zIndex", validate: (v) => !isNaN(v), transform: (v) => v },
            { prefix: "chai-border-", property: "border", validate: (v) => !isNaN(v), transform: (v) => `${v}px solid #e2e8f0` },

            // 6. Colors (Dynamic Hex or Names)
            { prefix: "chai-text-", property: "color", validate: () => true, transform: (v) => v },
            { prefix: "chai-bg-", property: "backgroundColor", validate: () => true, transform: (v) => v }
        ];
    }

    parseClass(cl) {
        for (let rule of this.rules) {
            if (cl.startsWith(rule.prefix)) {
                const value = cl.slice(rule.prefix.length);
                if (!rule.validate(value)) return null;
                return { property: rule.property, value: rule.transform(value) };
            }
        }
        return null;
    }

    run(root = document) {
        // 1. Initial Style Run
        this.applyStyles(root);

        // 2. Watch for changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) this.applyStyles(node);
                });
            });
        });

        observer.observe(root === document ? document.body : root, {
            childList: true,
            subtree: true
        });
    }

    // Move your logic to a helper method
    applyStyles(root) {
        const elements = root.querySelectorAll ? root.querySelectorAll("*") : [];
        // If the root itself has chai classes, include it
        const targets = root.classList ? [root, ...elements] : elements;

        targets.forEach((el) => {
            const styleMap = {};
            [...el.classList].forEach((cl) => {
                if (!cl.startsWith("chai-")) return;
                if (this.staticUtils[cl]) {
                    Object.assign(styleMap, this.staticUtils[cl]);
                } else {
                    const parsed = this.parseClass(cl);
                    if (parsed) styleMap[parsed.property] = parsed.value;
                }
            });
            Object.assign(el.style, styleMap);
        });
    }
}

// Auto-run if placed in a script tag (for CDN users)
if (typeof window !== "undefined") {
    window.ChaiCSS = new ChaiEngine();
    window.addEventListener('DOMContentLoaded', () => window.ChaiCSS.run());
}

