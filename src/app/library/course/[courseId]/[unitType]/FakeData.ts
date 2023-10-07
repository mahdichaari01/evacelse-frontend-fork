/*class Evaluations(BaseModel):
    name = Column(String, nullable=False)
    chapter_id = Column(String, ForeignKey("chapters.id"))

    chapter = relationship("Chapters", back_populates="evaluations")*/

export interface EvaluationResponse {
  id: string;
  title: string;
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

const FakeData = FakeEvaluations.map((title, index) => ({
  id: index.toString(),
  title,
  chapterId: "0",
}));

export const getEvaluations = async (id?: string) => {
  if (!id) throw new Error("No id provided");
  return new Promise<EvaluationResponse[]>((resolve) => {
    setTimeout(() => {
      resolve(FakeData);
    }, 1000);
  });
};

export const getEvaluation = async (id?: string) => {
  if (!id) throw new Error("No id provided");
  return new Promise<EvaluationResponse>((resolve) => {
    setTimeout(() => {
      resolve(FakeData.find((evaluation) => evaluation.id === id)!);
    }, 1000);
  });
};
