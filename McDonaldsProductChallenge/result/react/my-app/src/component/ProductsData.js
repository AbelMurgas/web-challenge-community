const images = {
 mcProtegidos: require('../assets/mcProtegidos.png'),
 mcMenu: require('../assets/mc-menu.jpg'),
 happyBox: require('../assets/thor-happy-box.jpg'),
 mcDelivery: require('../assets/mc-delivery.jpg'),
 ourApp: require('../assets/our-app.jpg'),
 vip: require('../assets/vip.jpg')
}

const IMAGES = [
 {
  id: 1,
  img: `${images.mcMenu}`, 
  title: "McMenú",
  info: "Para todo Mood hay McMenú",
 },
 {
  id: 2,
  img: `${images.happyBox}`, 
  title: "Cajita Feliz",
  info: "Este programa ofrece una línea de 10 figuras de plástico con funcionalidad que realizan movimientos típicos de los personajes de la película. Las bases de todos los diseños se unen formando un gran bote.",
  btnInfo: "Ver más"
 },
 {
  id: 3,
  img: `${images.mcDelivery}`, 
  title: "Pide McDelivery donde estés.",
  btnInfo: "Pide acá",
 },
 {
  id: 4,
  img: `${images.mcProtegidos}`, 
  title: "¡McProtegidos!",
  info: "Disfruta seguro y sin contacto.",
  btnInfo: "Conoce más"
 },
 {
  id: 5,
  img: `${images.ourApp}`, 
  title: "¡Beneficios en tus combos favoritos!",
  info: "¿Ya descargaste la app?",
  btnInfo: "Descárgala aquí",
 },
 {
  id: 6,
  img: `${images.vip}`, 
  title: "Club VIP AutoMac",
  info: "¡Inscríbete y disfruta de promociones exclusivas!",
  btnInfo: "Inscribete aquí",
 }
]

export default IMAGES