import { render, screen } from "@testing-library/react";
import { EventDetails } from "@/components/sections/EventDetails";

describe("EventDetails", () => {
  it("renders event details correctly", () => {
    render(<EventDetails />);
    expect(screen.getByText("Prize Pool")).toBeInTheDocument();
    expect(screen.getByText("R50,000")).toBeInTheDocument();
  });
});
