import React from 'react'

type FeatureBoxProps = {
  name: string,
  paragraph: string,
  icon: string
}

const FeatureBox = ({name, paragraph, icon}: FeatureBoxProps) => {
	return (
		<div className="feature-box">
			<div className={`icon icon--${icon}`}></div>
			<h4 className="feature-box--name">{name}</h4>
			<p className="feature-box--content medium">
				{paragraph}
			</p>
		</div>
	);
}

export default FeatureBox
