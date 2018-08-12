module.exports = function MultipleDelete(Model) {
    'use strict';

    Model.MultipleDelete = function (ids, cb) {
        if (!ids || !Array.isArray(ids)) return cb("Invalid List of Ids")

        Model.destroyAll({
            id: { inq: ids }
        }, cb);
    };

    Model.remoteMethod('MultipleDelete', {
        description: 'delete multiple data using an array of ids',
        accepts: [
            { "arg": "id", "type": "array", required: true }
        ],
        returns: {
            type: 'object',
            root: true
        },
        http: {
            path: '/delete',
            verb: 'delete'
        }
    });
};


