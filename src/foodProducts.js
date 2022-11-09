

const FOODS = [
    {
        id: 100,
        price: 80,
        image: require('../assets/pap2.jpg'),
        description: 'A classing pap and hardbody'
    },
];
export default function getFood() {
    return FOODS;
}
export function getFoods(id) {
    return FOODS.find((food) => (food.id == id));
}