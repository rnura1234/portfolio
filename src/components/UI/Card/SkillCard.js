import React, { useRef } from "react"
import classes from "./SkillCard.module.css"
import reactlogo from "../../../assets/images/css.png"
function SkillCard(props) {
	const { imgSrc, alt, completed, skillName } = props
	const devRef = useRef()
	const onClickHandler = () => {}
	return (
		<div className={classes.card}>
			<div className={classes["card_content"]}>
				<figure className={classes.figure}>
					<img src={imgSrc} alt={alt} />
				</figure>
				<div  className={classes.progress}>
					<span className={classes.progress_value}>{`${completed}%`}</span>
				</div>
				<div className={classes.skill}>
					<h2>{skillName}</h2>
				</div>
			</div>
		</div>
	)
}

export default SkillCard
