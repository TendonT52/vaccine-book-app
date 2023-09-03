import Banner from '@/components/Banner'
import Card from '@/components/Info'

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"space-around", alignContent: "space-around" }}>
        <Card hospitalName="Chulalongkorn Hospital" hospitalImage='/img/chula.jpg' />
        <Card hospitalName="Rajavithi Hospital" hospitalImage='/img/rajavithi.jpg' />
        <Card hospitalName="Thammasat University Hospital" hospitalImage='/img/thammasat.jpg' />
      </div>
    </main>
  )
}