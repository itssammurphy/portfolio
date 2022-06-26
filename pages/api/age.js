export default function handler(req, res) {
    const birthday = new Date(2005, 11, 3);
    const today = new Date();

    const currentAge = Math.abs(Math.floor((((today.getTime() - birthday.getTime()) / 1000) / (60 * 60 * 24))/365.25));

    res.status(200).json({age: currentAge});
}