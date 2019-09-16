import React from 'react'
import withStore from '~/hocs/withStore'
import styles from './index.module.css'

class Notifications extends React.Component {
    render() {
        let model = this.props.store.notifications
        let messages = model.list.map((note) => {
            return <div
                        key={note.id}
                        className={styles.item}
                        onDoubleClick={() => {model.remove(note.id)}}
                    >
                        {note.message}
                    </div>
        })

        return (
            <div className={styles.box}>
                {messages}
            </div>
        )
    }
}

export default withStore(Notifications)