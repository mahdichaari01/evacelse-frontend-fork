import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { IndexPage } from "../pages/IndexPage";
import {
	EvaluationPageLayout,
	QuestionContainer,
	QuestionListContainer,
} from "../components/Layouts/EvaluationsPageLayouts";
import { EvaluationsListSection } from "../pages/EvaluationsListSection";
import { QuestionSkeleton } from "../components/skeletons/QuestionSkeleton";
import { QuestionListSkeleton } from "../components/skeletons/QuestionListSkeleton";
import { QuestionsListSection } from "../pages/QuestionListSection";
import { QuestionsSection } from "../pages/QuestionSection";

export const Library = () => {
	return (
		<Routes>
			<Route index element={<IndexPage />} />
			<Route
				element={
					<EvaluationPageLayout>
						<Outlet />
					</EvaluationPageLayout>
				}
			>
				<Route path=":chapterID/evaluations" element={<EvaluationsListSection />}>
					<Route
						index
						element={
							<>
								<QuestionContainer>
									<QuestionSkeleton />
								</QuestionContainer>
								<QuestionListContainer>
									<QuestionListSkeleton />
								</QuestionListContainer>
							</>
						}
					/>
					<Route path=":evaluationID" element={<QuestionsListSection />}>
						<Route
							index
							element={
								<>
									<QuestionContainer>
										<QuestionSkeleton />
									</QuestionContainer>
								</>
							}
						/>
						<Route path="QCM/:questionID" element={<QuestionsSection />} />
						{/* <Route path="QROC" element={<>eval</>} />
						<Route path="CAS_CLINIQUE" element={<>eval</>} /> */}
					</Route>
				</Route>
			</Route>
			<Route path=":chapterID/sessions/*" element={<>sessions</>} />
			<Route path="*" element={<Navigate to="." />} />
		</Routes>
	);
};
