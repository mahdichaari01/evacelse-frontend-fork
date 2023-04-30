/*class Evaluations(BaseModel):
    name = Column(String, nullable=False)
    chapter_id = Column(String, ForeignKey("chapters.id"))

    chapter = relationship("Chapters", back_populates="evaluations")*/

interface EvaluationResponse {
	id: string;
	name: string;
	chapterId: string;
}

const FakeEvaluations = [
	"Série",
	"Douleurs thoraciques aiguës",
	"Endocardites infectieuses",
	"Hypertension artérielle",
	"Ischémie aiguë des membres",
	"Maladies veineuses thrombo-emboliques",
	"Syndromes coronariens aigus",
	"Appendicite aiguë",
	"Cancers colorectaux",
	"Hémorragies digestives",
	"Hydatidoses hépatiques & pulmonaires",
	"Occlusions intestinales aiguës",
	"Péritonites aiguës",
];

const FakeData = FakeEvaluations.map((name, index) => ({
	id: index.toString(),
	name,
	chapterId: "0",
}));

export const getEvaluations = async (id: string) => {
	return new Promise<EvaluationResponse[]>((resolve) => {
		setTimeout(() => {
			resolve(FakeData);
		}, 1000);
	});
};
