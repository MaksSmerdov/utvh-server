import { KeyItem } from '../../../types/interface.ts';

export const alarmLabels: KeyItem[] = [
  { name: 'Давл. воздуха низко', className: 'alarm__vozduh-low', key: `Давление воздуха низко` },
  { name: 'Давл. газа низко', className: 'alarm__gaz-low', key: `Давление газа низко` },
  { name: 'Давл. газа высоко<', className: 'alarm__gaz-high', key: `Давление газа высоко` },
  { name: 'Уровень воды низок', className: 'alarm__level-low', key: `Уровень низок` },
  { name: 'Уровень воды высок', className: 'alarm__level-high', key: `Уровень высок` },
  { name: 'Факел горелки погас', className: 'alarm__torch-disappeared', key: `Факел горелки погас` },
  { name: 'Разрежение мало', className: 'alarm__vacuum-low', key: `Разрежение мало` },
  { name: 'Дымосос отключен', className: 'alarm__smoke-off', key: `Дымосос отключен` },
  { name: 'Санкц. останов котла', className: 'alarm__boiler-stop', key: `Останов по команде` },
];
//
// export const infoLabels = [
//   { name: <>Останов котла</>, className: styles.infoOstanovKotla, key: `Останов котла` },
//   { name: <>Режим вентиляции</>, className: styles.infoRezhimVent, key: `Режим вентиляции` },
//   { name: <>Розжиг запальника</>, className: styles.infoRozhigZapalnik, key: `Розжиг запальника` },
//   { name: <>Режим стаб. запальника</>, className: styles.infoStabZapalnik, key: `Режим стабилизации запальника` },
//   { name: <>Розжиг горелки</>, className: styles.infoRozhigGorelki, key: `Розжиг горелки` },
//   { name: <>Режим стаб. горелки</>, className: styles.infoStabGorelki, key: `Режим стабилизации горелки` },
//   { name: <>Рабочий режим</>, className: styles.infoRabRezhim, key: `Рабочий режим` },
// ];
//
// export const staticLabels = [
//   { name: <>Вентилятор</>, className: styles.ventilatorText },
//   { name: <>Дымосос</>, className: styles.dimososText },
// ];

export const imLabels: KeyItem[] = [
  { key: `ИМ уровня`, className: 'im__level' },
  { key: `ИМ разрежения`, className: 'im__vacuum' },
  { key: `ИМ воздуха`, className: 'im__vozduh' },
  { key: `ИМ газа`, className: 'im__gaz' },
];