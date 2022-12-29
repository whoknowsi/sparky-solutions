import React, { useEffect, useState, useRef } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import styles from '../styles/CopyToClipboardButton.module.css'

const CopyToClipboardButton = ({ textToCopy, primaryText, secondaryText, Icon }) => {
    const hoverText = useRef(null)
    const [copiedText, setCopiedText] = useState("")

    return (
        <div className={styles.container}>
            <CopyToClipboard
                text={textToCopy}
                onCopy={() => setCopiedText(textToCopy)}
                onMouseLeave={() => setCopiedText("")}
            >
                <button>
                    {<Icon />}
                    <div>
                        <span className={styles.secondaryText}>{secondaryText}</span>
                        <span className={styles.primaryText}>{primaryText}</span>
                        <span ref={hoverText} className={styles.hoverText}>{copiedText ? "Copy!" : "Copy to clipboard"}</span>
                    </div>
                </button>
            </CopyToClipboard>
        </div>
    )
}

export default CopyToClipboardButton