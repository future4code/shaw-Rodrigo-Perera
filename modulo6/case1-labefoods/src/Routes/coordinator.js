export const goToLoginPage = (navigate) => {
    navigate('/')
}

export const goToFeedPage = (navigate) => {
    navigate('/feed')
}

export const goToSignUpPage = (navigate) => {
    navigate('/signUp')
}

export const goToSignUpAddressPage = (navigate) => {
    navigate('/signUp/address')
}

export const goToRestaurantPage = (navigate, id) => {
    navigate(`/feed/${id}`)
}

export const goToCartPage = (navigate) => {
    navigate('/cart')
}

export const goToProfilePage = (navigate) => {
    navigate('/profile')
}