import { randBetweenDate } from "@ngneat/falso";

/**class Sessions(BaseModel):
	date = Column(String, nullable=False)
	chapter_id = Column(String, ForeignKey("chapters.id"))

	chapter = relationship("Chapters", back_populates="sessions")    */

export interface SessionResponse {
	id: string;
	date: string;
	chapterId: string;
}

const FakeSessions = randBetweenDate({
	from: new Date(2010, 0, 1),
	to: new Date(2023, 11, 31),
	length: 20,
	format: "MM yyyy",
}).map((date, index) => ({
	id: index.toString(),
	date: date.toDateString(),
	chapterId: "0",
}));

export const getSessions = async (id?: string) => {
	return new Promise<SessionResponse[]>((resolve) => {
		setTimeout(() => {
			resolve(FakeSessions);
		}, 1000);
	});
};

getSessions("abd").then((sessions) => {
	console.log(sessions);
});
