import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render, act, fireEvent } from "@testing-library/react";
import PhotoLightbox from "../index";

describe("<PhotoLightbox/> unit test", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("Should render image correctly correctly if lightbox is open", () => {
    const photoUrl = "https://via.placeholder.com/600/92c952";
    const { getByTestId } = render(
      <PhotoLightbox
        handleClose={() => jest.fn()}
        isOpen={true}
        photoUrl={photoUrl}
      />,
      container
    );

    const image = getByTestId("image");

    expect(image).toHaveAttribute("src", photoUrl);
  });

  it("Should call handleClose function when clicking close button", () => {
    const handleClose = jest.fn();
    const photoUrl = "https://via.placeholder.com/600/92c952";

    const { getByTestId } = render(
      <PhotoLightbox
        handleClose={handleClose}
        isOpen={true}
        photoUrl={photoUrl}
      />,
      container
    );

    fireEvent.click(getByTestId("close"));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
