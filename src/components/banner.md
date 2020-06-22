---
# This is the banner/carousel component
---

import { Link } from 'gatsby'
import { Carousel } from 'react-bootstrap'

<Carousel>

<Carousel.Item><Link to="/page-2/">

![Slide 1](../images/slide1.png)

<Carousel.Caption>

### Slide 1 heading

</Carousel.Caption>
</Link></Carousel.Item>

<Carousel.Item>

![Slide 2](../images/slide2.png)

<Carousel.Caption>

### Slide 2 heading

</Carousel.Caption>
</Carousel.Item>

<Carousel.Item>

![Slide 3](../images/slide3.png)

<Carousel.Caption>

### Slide 3 heading

</Carousel.Caption>
</Carousel.Item>

</Carousel>
