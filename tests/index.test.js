/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
    <div id="gallery-container"></div>
`;

require("../src/index.js");

describe("Image Gallery Initialization", () => {
    beforeEach(() => {
        // Clear the document body before each test to ensure a clean state
        document.body.innerHTML = `<div id="gallery-container"></div>`;
        // Re-dispatch DOMContentLoaded to re-initialize the gallery for each test
        document.dispatchEvent(new Event("DOMContentLoaded"));
    });

    test("should render images into the gallery container on DOMContentLoaded", () => {
        const galleryContainer = document.getElementById("gallery-container");
        expect(galleryContainer).not.toBeNull();
        expect(galleryContainer.children.length).toBeGreaterThan(0);
        expect(galleryContainer.querySelector("img")).not.toBeNull();
    });

    test("should add click event listener to gallery images for fullscreen view", () => {
        const galleryContainer = document.getElementById("gallery-container");
        const firstImage = galleryContainer.querySelector("img");
        expect(firstImage).not.toBeNull();

        // Simulate click on the first image
        firstImage.click();

        // Check if fullscreen overlay is created
        const fullscreenOverlay = document.querySelector("div[style*=\"position: fixed\"]");
        expect(fullscreenOverlay).not.toBeNull();
        expect(fullscreenOverlay.querySelector("img")).not.toBeNull();

        // Simulate click on overlay to close it
        fullscreenOverlay.click();

        // The overlay should be removed from the document body
        expect(document.querySelector("div[style*=\"position: fixed\"]")).toBeNull();
    });
});

