import { axios } from "@/lib/axios";
import { randNumber } from "@ngneat/falso";

//backend model definition
/*
class Chapters(BaseModel):
    name = Column(String, nullable=False)
    pack_id = Column(String, ForeignKey("packs.id"))

    pack = relationship("Packs", back_populates="chapters")
    evaluations = relationship("Evaluations", back_populates="chapter")
    sessions = relationship("Sessions", back_populates="chapter")
*/

interface ChapterResponse {
	id: string;
	name: string;
	evaluationsCount: number;
	sessionsCount: number;
}

// export const getChapters = () => {
//     return axios.get<ChapterResponse[]>(`/chapters`)
// }

const FakeChapters = [
	"Série",
	"Jour 1",
	"Cardiologie-CCV",
	"Chirurgie générale",
	"Gastrologie-entérologie",
	"Gynécologie-obstétrique",
	"Neurologie",
	"ORL, Ophtalmologie",
	"Pneumologie",
	"Psychiatrie",
	"Jour 2",
	"Endocrinologie",
	"Hématologie",
	"Infectieux",
	"Néphrologie",
	"Ortho, rhumato",
	"Pédiatrie",
	"Réanimation",
	"Urologie",
];

const FakeData = FakeChapters.map((name, index) => ({
	id: index.toString(),
	name,
	evaluationsCount: randNumber({ min: 10, max: 99 }),
	sessionsCount: 0,
}));

export const getChapters = async () => {
	return new Promise<ChapterResponse[]>((resolve) => {
		setTimeout(() => {
			resolve(FakeData);
		}, 1000);
	});
};
