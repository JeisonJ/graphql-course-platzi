
module.exports = `
		# Curso en el sistema
		type Curso {
			id: ID!
			titulo: String!
			# Descripcion del curso
			descripcion: String!
			profesor: Profesor
			# Marcar para eliminar a futuro (deprecated)
			rating: Float @deprecated(reason: "No creemos más en los puntajes")
			comentarios: [Comentario]
		}

		type Comentario {
			id: ID!
			nombre: String!
			cuerpo: String!
		}

		input NuevoCurso {
			titulo: String!
			descripcion: String!
		}

		input CursoEditable {
			titulo: String
			descripcion: String
		}
	`