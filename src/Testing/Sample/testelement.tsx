/* eslint-disable react/jsx-pascal-case */

import React from "react";
import { insert } from "../testing";

function SAMPLE1_1() {
	return (
		<main className="bg-clears-secondary py-6 px-4 sm:p-6 md:py-10 md:px-8">
			<div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20">
				<div className="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3 sm:row-start-2 sm:bg-none sm:p-0 lg:row-start-1">
					<h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl">
						Beach House in Collingwood
					</h1>
					<p className="text-sm font-medium leading-4 text-white sm:text-slate-500">
						Entire house
					</p>
				</div>
				<div className="col-start-1 col-end-3 row-start-1 grid gap-4 sm:mb-6 sm:grid-cols-4 lg:col-start-2 lg:row-span-6 lg:row-end-6 lg:mb-0 lg:gap-6">
					<img
						src="https://tailwindcss.com/_next/static/media/beach-house.9b9ee168.jpg"
						alt=""
						className="h-60 w-full rounded object-cover sm:col-span-2 sm:h-52 lg:col-span-full"
						loading="lazy"
					/>
					<img
						src="https://tailwindcss.com/_next/static/media/beach-house-interior-1.f151eb56.jpg"
						alt=""
						className="hidden h-52 w-full rounded-lg object-cover sm:col-span-2 sm:block md:col-span-1 lg:col-span-2 lg:row-start-2 lg:h-32"
						loading="lazy"
					/>
					<img
						src="https://tailwindcss.com/_next/static/media/beach-house-interior-2.3672af98.jpg"
						alt=""
						className="hidden h-52 w-full rounded-lg object-cover md:block lg:col-span-2 lg:row-start-2 lg:h-32"
						loading="lazy"
					/>
				</div>
				<dl className="row-start-2 mt-4 flex items-center text-xs font-medium sm:row-start-3 sm:mt-1 md:mt-2.5 lg:row-start-2">
					<dt className="sr-only">Reviews</dt>
					<dd className="flex items-center text-indigo-600">
						<svg
							width="24"
							height="24"
							fill="none"
							aria-hidden="true"
							className="mr-1 stroke-current"
						>
							<path
								d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span>
							4.89 <span className="font-normal text-slate-400">(128)</span>
						</span>
					</dd>
					<dt className="sr-only">Location</dt>
					<dd className="flex items-center">
						<svg
							width="2"
							height="2"
							aria-hidden="true"
							fill="currentColor"
							className="mx-3 text-slate-300"
						>
							<circle cx="1" cy="1" r="1" />
						</svg>
						<svg
							width="24"
							height="24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mr-1 text-slate-400"
							aria-hidden="true"
						>
							<path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
							<path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
						</svg>
						Collingwood, Ontario
					</dd>
				</dl>
				<div className="col-start-1 row-start-3 mt-4 self-center sm:col-start-2 sm:row-span-2 sm:row-start-2 sm:mt-0 lg:col-start-1 lg:row-start-3 lg:row-end-4 lg:mt-6">
					<button
						type="button"
						className="rounded-lg bg-indigo-600 py-2 px-3 text-sm font-medium leading-6 text-white"
					>
						Check availability
					</button>
				</div>
				<p className="col-start-1 mt-4 text-sm leading-6 sm:col-span-2 lg:col-span-1 lg:row-start-4 lg:mt-6">
					This sunny and spacious room is for those traveling light and looking for a
					comfy and cosy place to lay their head for a night or two. This beach house
					sits in a vibrant neighborhood littered with cafes, pubs, restaurants and
					supermarkets and is close to all the major attractions such as Edinburgh
					Castle and Arthur's Seat.
				</p>
			</div>
		</main>
	);
}

function SAMPLE2_1() {
	return (
		<div className="font-mono flex p-6">
			<div className="relative z-10 mb-10 w-48 flex-none before:absolute before:top-1 before:left-1 before:h-full before:w-full before:bg-teal-400">
				<img
					src="https://tailwindcss.com/_next/static/media/retro-shoe.24e25785.jpg"
					alt=""
					className="absolute inset-0 z-10 h-full w-full rounded-lg object-cover"
					loading="lazy"
				/>
			</div>
			<form className="flex-auto pl-6">
				<div className="relative flex flex-wrap items-baseline pb-6 before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6 before:bg-black">
					<h1 className="relative mb-2 w-full flex-none text-2xl font-semibold text-white">
						Retro Shoe
					</h1>
					<div className="relative text-lg text-white">$89.00</div>
					<div className="relative ml-3 uppercase text-teal-400">In stock</div>
				</div>
				<div className="my-6 flex items-baseline">
					<div className="flex space-x-3 text-sm font-medium">
						<label>
							<input
								className="peer sr-only"
								name="size"
								type="radio"
								value="xs"
								defaultChecked={true}
							/>
							<div className="relative flex h-10 w-10 items-center justify-center text-black before:absolute before:top-0.5 before:left-0.5 before:z-[-1] before:h-full before:w-full peer-checked:bg-black peer-checked:text-white peer-checked:before:bg-teal-400">
								XS
							</div>
						</label>
						<label>
							<input className="peer sr-only" name="size" type="radio" value="s" />
							<div className="relative flex h-10 w-10 items-center justify-center text-black before:absolute before:top-0.5 before:left-0.5 before:z-[-1] before:h-full before:w-full peer-checked:bg-black peer-checked:text-white peer-checked:before:bg-teal-400">
								S
							</div>
						</label>
						<label>
							<input className="peer sr-only" name="size" type="radio" value="m" />
							<div className="relative flex h-10 w-10 items-center justify-center text-black before:absolute before:top-0.5 before:left-0.5 before:z-[-1] before:h-full before:w-full peer-checked:bg-black peer-checked:text-white peer-checked:before:bg-teal-400">
								M
							</div>
						</label>
						<label>
							<input className="peer sr-only" name="size" type="radio" value="l" />
							<div className="relative flex h-10 w-10 items-center justify-center text-black before:absolute before:top-0.5 before:left-0.5 before:z-[-1] before:h-full before:w-full peer-checked:bg-black peer-checked:text-white peer-checked:before:bg-teal-400">
								L
							</div>
						</label>
						<label>
							<input className="peer sr-only" name="size" type="radio" value="xl" />
							<div className="relative flex h-10 w-10 items-center justify-center text-black before:absolute before:top-0.5 before:left-0.5 before:z-[-1] before:h-full before:w-full peer-checked:bg-black peer-checked:text-white peer-checked:before:bg-teal-400">
								XL
							</div>
						</label>
					</div>
				</div>
				<div className="mb-4 flex space-x-2 text-sm font-medium">
					<div className="flex space-x-4">
						<button
							className="h-12 border-2 border-black bg-teal-400 px-6 font-semibold uppercase tracking-wider text-black"
							type="submit"
						>
							Buy now
						</button>
						<button
							className="h-12 border border-slate-200 px-6 font-semibold uppercase tracking-wider text-slate-900"
							type="button"
						>
							Add to bag
						</button>
					</div>
					<button
						className="flex h-12 w-12 flex-none items-center justify-center text-black"
						type="button"
						aria-label="Like"
					>
						<svg width="20" height="20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
							/>
						</svg>
					</button>
				</div>
				<p className="text-xs leading-6 text-slate-500">
					Free shipping on all continental US orders.
				</p>
			</form>
		</div>
	);
}
function SAMPLE2_2() {
	return (
		<div className="flex font-sans">
			<div className="relative w-56 flex-none">
				<img
					src="https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg"
					alt=""
					className="absolute inset-0 h-full w-full rounded-lg object-cover"
					loading="lazy"
				/>
			</div>
			<form className="flex-auto p-6">
				<div className="flex flex-wrap">
					<h1 className="flex-auto font-medium text-slate-900">Kids Jumpsuit</h1>
					<div className="order-1 mt-2 w-full flex-none text-3xl font-bold text-violet-600">
						$39.00
					</div>
					<div className="text-sm font-medium text-slate-400">In stock</div>
				</div>
				<div className="mt-4 mb-6 flex items-baseline border-b border-slate-200 pb-6">
					<div className="flex space-x-2 text-sm font-bold">
						<label>
							<input
								className="peer sr-only"
								name="size"
								type="radio"
								value="xs"
								defaultChecked={true}
							/>
							<div className="flex h-9 w-9 items-center justify-center rounded-full text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
								XS
							</div>
						</label>
						<label>
							<input className="peer sr-only" name="size" type="radio" value="s" />
							<div className="flex h-9 w-9 items-center justify-center rounded-full text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
								S
							</div>
						</label>
						<label>
							<input className="peer sr-only" name="size" type="radio" value="m" />
							<div className="flex h-9 w-9 items-center justify-center rounded-full text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
								M
							</div>
						</label>
						<label>
							<input className="peer sr-only" name="size" type="radio" value="l" />
							<div className="flex h-9 w-9 items-center justify-center rounded-full text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
								L
							</div>
						</label>
						<label>
							<input className="peer sr-only" name="size" type="radio" value="xl" />
							<div className="flex h-9 w-9 items-center justify-center rounded-full text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
								XL
							</div>
						</label>
					</div>
				</div>
				<div className="mb-5 flex space-x-4 text-sm font-medium">
					<div className="flex flex-auto space-x-4">
						<button
							className="h-10 rounded-full bg-violet-600 px-6 font-semibold text-white"
							type="submit"
						>
							Buy now
						</button>
						<button
							className="h-10 rounded-full border border-slate-200 px-6 font-semibold text-slate-900"
							type="button"
						>
							Add to bag
						</button>
					</div>
					<button
						className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-violet-50 text-violet-600"
						type="button"
						aria-label="Like"
					>
						<svg width="20" height="20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
							/>
						</svg>
					</button>
				</div>
				<p className="text-sm text-slate-500">
					Free shipping on all continental US orders.
				</p>
			</form>
		</div>
	);
}
function SAMPLE2_3() {
	return (
		<div className="flex font-sans">
			<div className="relative w-48 flex-none">
				<img
					src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg"
					alt=""
					className="absolute inset-0 h-full w-full object-cover"
					loading="lazy"
				/>
			</div>
			<form className="flex-auto p-6">
				<div className="flex flex-wrap">
					<h1 className="flex-auto text-lg font-semibold text-slate-900">
						classNameic Utility Jacket
					</h1>
					<div className="text-lg font-semibold text-slate-500">$110.00</div>
					<div className="mt-2 w-full flex-none text-sm font-medium text-slate-700">
						In stock
					</div>
				</div>
				<div className="mt-4 mb-6 flex items-baseline border-b border-slate-200 pb-6">
					<div className="flex space-x-2 text-sm">
						<label>
							<input
								className="peer sr-only"
								name="size"
								type="radio"
								value="xs"
								checked
							/>
							<div className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
								XS
							</div>
						</label>
						<label>
							<input className="peer sr-only" name="size" type="radio" value="s" />
							<div className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
								S
							</div>
						</label>
						<label>
							<input className="peer sr-only" name="size" type="radio" value="m" />
							<div className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
								M
							</div>
						</label>
						<label>
							<input className="peer sr-only" name="size" type="radio" value="l" />
							<div className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
								L
							</div>
						</label>
						<label>
							<input className="peer sr-only" name="size" type="radio" value="xl" />
							<div className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
								XL
							</div>
						</label>
					</div>
				</div>
				<div className="mb-6 flex space-x-4 text-sm font-medium">
					<div className="flex flex-auto space-x-4">
						<button
							className="h-10 rounded-md bg-black px-6 font-semibold text-white"
							type="submit"
						>
							Buy now
						</button>
						<button
							className="h-10 rounded-md border border-slate-200 px-6 font-semibold text-slate-900"
							type="button"
						>
							Add to bag
						</button>
					</div>
					<button
						className="flex h-9 w-9 flex-none items-center justify-center rounded-md border border-slate-200 text-slate-300"
						type="button"
						aria-label="Like"
					>
						<svg width="20" height="20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
							/>
						</svg>
					</button>
				</div>
				<p className="text-sm text-slate-700">
					Free shipping on all continental US orders.
				</p>
			</form>
		</div>
	);
}
insert("Examples", "SAMPLE1", [
	{
		variant: "variant1",
		element: (
			<>
				<SAMPLE1_1 />
				<SAMPLE1_1 />
				<SAMPLE1_1 />
			</>
		),
	},
]);
insert("Examples", "SAMPLE2", [
	{ variant: "variant1", element: <SAMPLE2_1 /> },
	{ variant: "variant2", element: <SAMPLE2_2 /> },
	{ variant: "variant3", element: <SAMPLE2_3 /> },
]);
