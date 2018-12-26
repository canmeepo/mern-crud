const Item = require('../models/item')

module.exports = {
    getAll: async (req, res) => {
        try {
            const items = await Item.find({})
            res.status(200).json(items)
        } catch(e) {
            res.status(500).json({
                success: false,
                message: 'ERROR'
            })
        }
    },

    create: async (req, res) => {
        console.log(req.body)
        const item = new Item({
            nickname: req.body.nickname,
            level: req.body.level,
            class_name: req.body.class_name
        })

        try {
            await item.save();
            res.status(201).json(item)
        } catch(e) {
            res.status(500).json({
                success: false,
                message: item
            })
        }
    },

    remove: async (req, res) => {
        try {
            await Item.remove({_id: req.params.id});
            res.status(200).json({
                message: 'item has been removed'
            })
        } catch(e) {
            res.status(500).json({
                success: false,
                message: 'error removing'
            })
        }
    },

    update: async (req, res) => {
        try {
            const item = await Item.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true});
            res.status(200).json({
                message: 'success'
            })
        } catch(e) {
            res.status(500).json({
                success: false,
                message: 'error update'
            })
        }

    }
}