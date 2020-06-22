---
# TODO: put prayer times into a datasource
---

import { Card, CardDeck } from 'react-bootstrap'
import styles from './prayer-times.module.css'

# Iqamah & Prayer Times

<CardDeck className={styles.deck}>
<Card>
  <Card.Body>
    <Card.Title>Fajr</Card.Title>
    <Card.Text>5:00 AM</Card.Text>
  </Card.Body>
</Card>
<Card>
  <Card.Body>
    <Card.Title>Duhr</Card.Title>
    <Card.Text>1:15 PM</Card.Text>
  </Card.Body>
</Card>
<Card>
  <Card.Body>
    <Card.Title>Asr</Card.Title>
    <Card.Text>5:00 PM</Card.Text>
  </Card.Body>
</Card>
<Card>
  <Card.Body>
    <Card.Title>Maghrib</Card.Title>
    <Card.Text>10 minutes after sunset</Card.Text>
  </Card.Body>
</Card>
<Card>
  <Card.Body>
    <Card.Title>Isha</Card.Title>
    <Card.Text>9:30 PM</Card.Text>
  </Card.Body>
</Card>
</CardDeck>

<CardDeck className={styles.deck}>
<Card>
  <Card.Body>
    <Card.Title>1st Khutbah</Card.Title>
    <Card.Text>12:40 PM</Card.Text>
  </Card.Body>
</Card>
<Card>
  <Card.Body>
    <Card.Title>2nd Khutbah</Card.Title>
    <Card.Text>1:30 PM</Card.Text>
  </Card.Body>
</Card>
<Card>
  <Card.Body>
    <Card.Title>3rd Khutbah</Card.Title>
    <Card.Text>2:15 PM</Card.Text>
  </Card.Body>
</Card>
</CardDeck>
