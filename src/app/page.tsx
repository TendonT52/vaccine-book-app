import Banner from '@/components/Banner'
import Info from '@/components/Info'

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"space-around", alignContent: "space-around" }}>
        <Info hospitalName="Chulalongkorn Hospital" hospitalImage='/img/chula.jpg' />
        <Info hospitalName="Rajavithi Hospital" hospitalImage='/img/rajavithi.jpg' />
        <Info hospitalName="Thammasat University Hospital" hospitalImage='/img/thammasat.jpg' />
      </div>
    </main>
  )
}