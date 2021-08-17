import React, { useState } from 'react'

export default function ProductDescTabs(props) {

  const [ activeTab, setActiveTab ] = useState("infoGuide");

	const { returnGuide, infoGuide, shippingGuide } = props
	const changeActiveTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

	return (
		<div className="product--desc-tabs tabs">
		{/* Nav tabs  */}
		<ul className="nav nav-tabs" role="tablist">
			<li>
				<button
					className={activeTab === "infoGuide" ? "active" : ""}
					onClick={() => changeActiveTab("infoGuide")}
				>
					INFO GUIDE
				</button>
			</li>
			<li>
				<button
					className={
						activeTab === "shippingGuide" ? "active" : ""
					}
					onClick={() => changeActiveTab("shippingGuide")}
				>
					SHIPPING
				</button>
			</li>
			<li>
				<button
					className={
						activeTab === "returnGuide" ? "active" : ""
					}
					onClick={() => changeActiveTab("returnGuide")}
				>
					RETURN
				</button>
			</li>
		</ul>

		{/* Tab panes  */}
		<div className="tab-content">
			{/* INFO GUIDE */}
			<div
				role="tabpanel"
				className={`tab-pane fade ${
					activeTab === "infoGuide" ? "show active" : ""
				}`}
			>
				<div className="product--desc">
					<p>{infoGuide}</p>
				</div>
			</div>

			{/* .tab-pane end  */}

			{/* SHIPPING */}
			<div
				role="tabpanel"
				className={`tab-pane fade ${
					activeTab === "shippingGuide" ? "show active" : ""
				}`}
			>
				<div className="product--desc">
					<p>{shippingGuide}</p>
				</div>
			</div>
			{/* .tab-pane end  */}

			<div
				role="tabpanel"
				className={`tab-pane fade ${
					activeTab === "returnGuide" ? "show active" : ""
				}`}
				id="popup--desc-tabs-3"
			>
				<div className="product--desc">
					<p>{returnGuide}</p>
				</div>
			</div>

		</div>
	</div>
	)
}
