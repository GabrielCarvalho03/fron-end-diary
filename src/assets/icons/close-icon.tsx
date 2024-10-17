import { SVGProps } from "react";
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h20v20H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.01)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACt0lEQVR4nO3dS07cQBSF4TOA+ZWcCUm2kgFhLQR2EcI2AvtpGqkrK2kiRRlX5MiWUCsPP+pxruv8kqdQ5a+N6W6rClBKKaWUUkoppZRSSimi3gG4B/AI4AbAGfx3DuB2mFM/t7dw0iWAFwDx1bED0MFvHYCnkzm9DHOl7gOAHycDH49vAN7AXwbg+S9z+gngCg4xvKLYPzCoUaZgeEOxCRiUKHMwvKDYDAwqlCUY7Ci2AIMCZQ0GK4qtwKiK0v8Pflw5cDYUS4AxHt8BvC85+PtEAx+PQ+X3Kd0whpRzuis5gcfEg6+J0mXA6I+vJSdxk2ECsQJKLoz+uC44j9+fTT05R+kyYuxqfH6X8ib4pxt953Tsoeb90OPEzOGYNztBczTWzU/UHIwxacwTNuKxZY1x4kY4pqIxnQAjGkvVGE6EEYyBqponxITBc2JMGDxXigljWv2J2mdGMWHwfJh3yPyz3d3AGa6UWPA+tam8oIQWMLyghJYw2FFCixisKKFlDDaUIAwelCAMnislCIPnz1cQBs89JQiD50YfhDEvy/hBoUDIMKJQ+DCiUPgwolD4MKJQ+DCiUPgwolD4MGLLKKwYsUUUdozYEooXjNgCih4DIqrEQ2yW+WE8hsUNXD5Kus/0u1hWnHD5sPVeKBwYY0I5ieHBZ9OVwoMx1jwKEwZaR2HEaBaFGaM5FA8YzaB4wtg8ikeMUktLFUfRAmbgWsDsNtOr66Al/palRTDx3xfXAwr2xfmVUeK7ms9wupAyy7dylngh5X5TG3dLjbNgpF5q/CMqtQaFDSPVYvzVMNagsGKs3a6iOsYSFHaMpRu60GDMQfGCMXfLIzqMKSjeMKZuCkaLsfVt83Ynczp62Dbv9fuUu2HLhuuNbCx5BuDT8A68f9N3UXtASimllFJKKaWUUkophbFfx69e4IeVu0wAAAAASUVORK5CYII="
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default CloseIcon;
