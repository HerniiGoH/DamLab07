// JavaScript source code
import {StyleSheet} from 'react-native';
const fondo = '#E1E2E1';
const primaryColor = '#7e57c2';
const primaryLightColor = '#b085f5';
const primaryDarkColor = '#4d2c91';
const primaryTextColor = '#ffffff';
const primaryDarkTextColor = '#000000';
const colorInputTexto = '#1c313a';
const estilosPrincipal = StyleSheet.create({
 contenedor: {
 flex: 1,
 flexDirection: 'column',
 justifyContent: 'flex-start',
 alignItems: 'flex-start',
 backgroundColor: fondo,
 width: '100%',
 },
 titulo: {
 color: primaryTextColor,
 backgroundColor: primaryDarkColor,
 fontWeight: 'bold',
 fontSize: 30,
 width: '100%',
 },
 etiqueta: {
 color: primaryDarkTextColor,
 },
 inputText: {
 color: colorInputTexto,
 backgroundColor: primaryLightColor,
 fontSize: 18,
 width: '100%',
 },
 btnGuardar: {
 fontSize: 20,
 width: '100%',
Desarrollo de Aplicaciones Móviles Ingeniería en Sistemas de Información
 flex: 1,
 },
});
export default estilosPrincipal;