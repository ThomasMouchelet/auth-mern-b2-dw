import instance from './api.service'

const endPoint = '/shops'

const create = async (credentials) => {
    const response = await instance.post(endPoint, credentials)
    return response.data
}

const ShopService = {
    create
}

export default ShopService