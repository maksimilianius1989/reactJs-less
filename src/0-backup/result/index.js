import React from 'react'
import PropType from 'prop-types'
import cartModel from '~s/cart'

export default class extends React.Component {
    render() {
        return (
            <div>
                <h2>Congratulations!</h2>
                <p>{cartModel.total}</p>
            </div>
        )
    }
}
