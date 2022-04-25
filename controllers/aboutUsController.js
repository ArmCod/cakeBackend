const {AboutUsBanner: HomeBanner} = require("../models");
const AboutUs = require('../models').AboutUs


const create = async (req, res) => {
    try {
        const {titleHy, titleEn, titleRu, textHy, textEn, textRu} = req.body
        const aboutUs = await AboutUs.create({
            titleHy, titleEn, titleRu, textHy, textEn, textRu
        })
        return res.json(aboutUs)

    } catch (e) {
        console.log("something went wrong", e)
    }
}


const edit = async (req, res) => {
    try {
        const {id, titleHy, titleEn, titleRu, textHy, textEn, textRu} = req.body
        const thisAboutUs = await AboutUs.destroy({ where: { id } })
        const newAbout = await AboutUs.create({
            id:1, titleHy, titleEn, titleRu, textHy, textEn, textRu
        })

        return res.json(newAbout)
    }catch (e) {
        console.log("something went wrong",e)
    }

}

const get = async (req, res) => {
    try {
        const aboutUs = await AboutUs.findAll({
            limit:1,
        })
        return res.json(aboutUs)
    } catch (e) {
        console.log("something went wrong", e)
    }
}
module.exports = {
    create,
    edit,
    get
}

