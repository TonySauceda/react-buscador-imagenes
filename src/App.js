import { Formik, Form, Field } from 'formik'
import './header.css'

const App = () => {
	return (
		<div>
			<header>
				<Formik
					initialValues={{ search: '' }}
					onSubmit={async (values) => {
						// Llamar a la api de unsplash
						console.log(values)
					}}
				>
					<Form>
						<Field name="search" />
					</Form>
				</Formik>
			</header>
		</div>
	)
}

export default App
