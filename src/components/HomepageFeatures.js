import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import Slideshow from '../components/Slideshow';

import
	{
		CheckIcon, ClockIcon, DocumentAddIcon, LibraryIcon, LightningBoltIcon, LinkIcon, LockClosedIcon, LoginIcon,
		PencilIcon, PuzzleIcon, ShieldCheckIcon,
		SwitchHorizontalIcon
	} from '@heroicons/react/outline';

const features = [
	{
		name: <div className='flex  justify-center'>UI? Done</div>,
		description: 'UI is autogenerated from script parameters and flow inputs',
		icon: LightningBoltIcon,
	},
	{
		name: 'Make it Flow',
		description: 'Scripts are standalone apps that can be reused and chained as building blocks to create more complex Flows',
		icon: LinkIcon,
	},
	{
		name: 'Schedules',
		description: 'Trigger scripts and flows using cron-like schedules, or via an automatically generated webhook',
		icon: ClockIcon,
	},
	{
		name: 'OAuth integrations & external apps',
		description: 'Connect to external apps using any OAuth providers or API keys',
		icon: PuzzleIcon,
	},
	{
		name: 'Granular Permissions & Approval flows',
		description: 'Credentials are tightly permissioned to users and groups. Ask approvals as a step of your flow',
		icon: LockClosedIcon,
	},
	{
		name: 'Deploy from Github & Exportable Workspace',
		description: <span><a href="https://github.com/windmill-labs/deploy-from-github-example">Sync with Github</a> and version your flow and scripts externally if needed</span>,
		icon: SwitchHorizontalIcon,
	},
	{
		name: 'Powerful webeditor with code intelligence and preview',
		description: 'Use your IDE or use ours, the web editor is powered by Monaco and LSP with a preview feature to quickly iterate',
		icon: PencilIcon,
	},
	{
		name: 'Secrets',
		description: `Separate credentials and sensitive values from your logic. Keep it secure and tightly permissioned`,
		icon: ShieldCheckIcon,
	},
	{
		name: 'Slack commands, Webhooks, Lambda style endpoints',
		description: 'Trigger scripts from a slack workspace, or using webhooks. Implement your backends using the wait-for-result endpoints',
		icon: LoginIcon,
	},
	{
		name: 'Versioning',
		description: 'Scripts are never overwritten, they are versioned',
		icon: DocumentAddIcon,
	},
	{
		name: 'WindmillHub',
		description: <span>Community driven, vetted and tested. Discover, share and use scripts via <a href="https://hub.windmill.dev/">WindmillHub</a> </span>,
		icon: LibraryIcon,
	},
	{
		name: 'Performant, Scalable, production-grade',
		description: <span>Written in Rust, minimal overhead, designed for scale and extremely reliable. <a href="https://docs.windmill.dev/docs/benchmark">Similar to AWS Lambda.</a></span>,
		icon: LightningBoltIcon,
	},


]

export default function HomepageFeatures()
{
	return (
		<div>
			<div className="relative pt-20  pb-10">
				<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 className="text-base font-semibold uppercase tracking-wider text-blue-600">All-in-one platform to power your entire backoffice</h2>
					<p className="mx-auto mt-5 max-w-prose text-xl text-gray-700">
						serverless runtime + autogenerated UI to share your app + flow builder + schedules + secrets + groups + permissions + OAuth integrations + ...
					</p>
					<div className="mt-40">
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{features.map((feature) => (
								<div key={feature.name} className="pt-6">
									<div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
										<div className="-mt-6">
											<div>
												<span className="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg">
													<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
												</span>
											</div>
											<h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
											<p className="mt-5 text-base text-gray-500">{feature.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="relative mt-20 py-10 overflow-hidden">
				<div className="relative">
					<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense ">
						<div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
							<div>
								<div className="mt-6">
									<h2 className="text-3xl font-extrabold tracking-tight font-boldtext-gray-900">
										<span className="block xl:inline">Any script with any dependency, the full power of code, without the hassle</span>
									</h2>
									<p className="mt-8 text-lg text-gray-500">
										Apps and their UI are automatically generated and continuously updated from your script parameters. Refine the UI if desired.
										<br /><br />
										Develop and maintain scripts from our feature-complete webeditor or use your own IDE and <a href="https://github.com/windmill-labs/deploy-from-github-example">deploy from Github</a>.
										<br /><br />
										<span className='font-bold'>The generated UI makes it very simple to expose your app to non-technical users while
											requiring minimal efforts to develop and maintain. Every script can be a standalone app in itself or be used as a step inside a Flow.</span>
									</p>
								</div>
							</div>
						</div>
						<div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-2">
							<div className="flex flex-col p-4 lg:-ml-4 sm:pr-6 lg:px-0  lg:h-full ">
								<div className='w-full lg:max-w-none m-auto'>
									<img
										className=""
										src="/img/parser.png"
										alt="UI parser"
									/>
								</div>
								<div className='w-full lg:max-w-lg m-auto'>
									<p className='text-gray-700 italic  text-sm text-center max-w-lg'>Script parameters are parsed automatically to generate your app UI that you may still refine. Scripts are also transformed into no-code modules this way.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-40">
				<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-20">
					<div className="px-4 max-w-xl m-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
						<div>
							<div className="mt-6">
								<h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
									Turn scripts into shareable internal apps or complex workflows triggered by webhooks, a schedule, or watching for new events.
								</h2>
								<p className="mt-8 text-lg text-gray-500">
									Your team never has to worry about deploying and managing the infra of your internal operations.
									<br /><br />
									<a href="https://github.com/windmill-labs/deploy-from-github-example">Deploy from GitHub</a>, or write and manage your scripts directly from Windmill, or a mix of both, up to you.
									<br /><br />
									Credentials and sensitive values are tightly permissioned and stored securely as <span className='font-bold'>secrets</span>
									<br /><br />
									See all past executions and keep track of operations with <span className='font-bold'>audit logs</span> enabling you to root cause quickly any mishaps.
									<br /><br />
									Define visibility, edit rights and executability for your scripts, resources, schedules, etc using <span className='font-bold'>groups' and users' granular permissions</span>.
									<br /><br />
									Upskill your less technical members interested in authoring scripts themselves by having them learn Python or Typescript in an accessible and integrated environment.
								</p>
							</div>
						</div>
					</div>
					<div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
						<div className="flex p-4 lg:-ml-4 sm:pr-6 lg:px-0  lg:h-full">
							<div className='w-full lg:max-w-none m-auto'>
								<img
									className=""
									src="/flow_lp.png"
									alt="Flow UI"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="mt-40">
				<div className="mx-auto px-8 max-w-7xl">
					<div>
						<div>
							<div className="mt-6">
								<h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
									Replace all your sparely used niche tools: <br /> We cover every use-case and to
									any API
								</h2>
								<p className="mt-8 text-lg text-gray-500">
									We integrate with any OAuth provider to manage access and refresh tokens. If it
									does not exist yet,{' '}
									<a href="/docs/contributors_guide#add-an-oauth-provider">we will add it easily</a>
									.
									<br />
									<br />
									Watch for new external events using dedicated{' '}
									<a href="/docs/reference#trigger-scripts">trigger scripts</a>.
									<br />
									<br />
									Write SQL queries as parameters of your script in a dedicated SQL editor.
									<br />
									<br />
									Trigger scripts from <span className="font-bold">slack commands</span>,{' '}
									<span className="font-bold">autogenerated UI</span>,{' '}
									<span className="font-bold">Webhooks</span> and{' '}
									<span className="font-bold">Schedules</span>.
									<br />
									<br />
									Many tools do only one thing, and are focused on one specific problem. You need to
									setup many different niche tools from whom you exploit only a tiny portion of the
									features.
									<br />
									<br />
									Unlike other automation tools, we do not reinvent the wheel with proprietary
									connectors and UI, connect to any API using any standard python or typescript
									client or dependencies available in PyPI or Deno compatible packages.
									<br />
									<br />
									<span className="font-bold text-black">
										Any python or typescript (deno) library becomes a connector. Use REST API
										otherwise. Hence we have more integrations out-of-the-box than any other tools.
									</span>
									<br />
								</p>
							</div>
						</div>
					</div>
					<div className="mt-12 sm:mt-16 w-full">
						<div className="flex justify-center">
							<img src="/diagram.svg" alt="Windmill diagram" />
						</div>
					</div>
				</div>
			</div>


			<div className="my-20 w-full">

				<div className="mx-auto max-w-6xl">
					<Slideshow></Slideshow>
				</div>
			</div>



		</div >
	)
}


