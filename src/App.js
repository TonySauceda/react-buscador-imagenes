import { Formik, Form, Field } from 'formik'
import { useState } from 'react'
import './header.css'

const App = () => {
	const [photos, setPhotos] = useState([])
	console.log(photos)

	const open = (url) => window.open(url)

	return (
		<div>
			<header>
				<Formik
					initialValues={{ search: '' }}
					onSubmit={async (values) => {
						const api_key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY
						const url = 'https://api.unsplash.com/search/photos'
						const pageSize = 20
						const response = await fetch(`${url}?per_page=${pageSize}&query=${values.search}`, {
							headers: {
								Authorization: `Client-ID ${api_key}`,
							},
						})

						const data = await response.json()
						setPhotos(data.results)
						console.log(photos)
					}}
				>
					<Form>
						<Field name="search" />
					</Form>
				</Formik>
			</header>
			<div className="container">
				<div className="center">
					{photos.map((photo) => (
						<article key={photo.id} onClick={() => open(photo.links.html)}>
							<img src={photo.urls.regular} alt={photo.alt_description} />
							<p>{[photo.description, photo.alt_description].join('-')}</p>
						</article>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
