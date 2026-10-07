import { useForm } from "react-hook-form";


export default function Signup() {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        reset()
    }

   return (
      <main className="min-h-screen flex flex-col justify-center p-4 md:p-8">
         <div className="w-full max-w-lg mx-auto sm:max-w-4xl">
            <div className="mb-12">
               <a href="#"><img src="https://readymadeui.com/readymadeui.svg" alt="logo"
                  className="w-40 inline-block dark:invert dark:brightness-100" />
               </a>
               <p className="text-slate-600 text-base mt-6 dark:text-slate-400">Create your account and get started</p>
            </div>

            <form className="w-full" onSubmit={handleSubmit(onSubmit)} >
               <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                     <label htmlFor="fname" className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">First
                        Name</label>
                     <input type="text" id="fname" {...register("fname", { 
                        required: "First name is required",
                        minLength: {
                           value: 2,
                           message: "First name must be at least 2 characters"
                        },
                    })} placeholder="John"
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                        {errors.fname && (
                            <p className="text-sm text-red-600">{errors.fname.message}</p>
                        )}
                  </div>
                  <div>
                     <label htmlFor="lname" className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Last
                        Name</label>
                     <input type="text" id="lname" {...register("lname", {
                        required: "Last name is required",
                        minLength: {
                           value: 2,
                           message: "Last name must be at least 2 characters"
                        },
                     })} placeholder="Doe"
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                        {errors.lname && (
                            <p className="text-sm text-red-600">{errors.lname.message}</p>
                        )}
                  </div>
                  <div>
                     <label htmlFor="email"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Email</label>
                     <input type="email" id="email" {...register("email", {
                        required: "Email is required",
                        pattern: {
                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                           message: "Invalid email address"
                        }
                     })} placeholder="john@readymadeui.com"
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                        {errors.email && (
                            <p className="text-sm text-red-600">{errors.email.message}</p>
                        )}
                  </div>
                  <div>
                     <label htmlFor="mobile"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Mobile Number</label>
                     <input type="tel" id="mobile" {...register("mobile", {
                        required: "Mobile number is required",
                        minLength: {
                           value: 11,
                           message: "Last name must be at least 2 characters"
                        },
                     })} placeholder="123-456-7890"
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                        {errors.mobile && (
                            <p className="text-sm text-red-600">{errors.mobile.message}</p>
                        )}
                  </div>
                  <div>
                     <label htmlFor="password"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Password</label>
                     <input type="password" id="password" {...register("password", {
                        required: "Password is required",
                        pattern: {
                           value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                           message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                        }
                     })} placeholder="••••••••"
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                        {errors.password && (
                            <p className="text-sm text-red-600">{errors.password.message}</p>
                        )}
                  </div>
                  <div>
                     <label htmlFor="cpassword"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Confirm
                        Password</label>
                     <input type="password" id="cpassword" {...register("cpassword", {
                        required: "Confirm password is required",
                        validate: (value) => value === watch("password") || "Passwords do not match"
                     })} placeholder="••••••••"
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                        {errors.cpassword && (
                            <p className="text-sm text-red-600">{errors.cpassword.message}</p>
                        )}
                  </div>
                  <div className="flex items-start flex-wrap gap-2">
                     <label className="flex items-center group has-[input:checked]:text-slate-900">
                        <input id="tmc" {...register("tmc", {
                            required: "You must accept the terms and conditions"
                        })} type="checkbox" className="sr-only" />
                        {/* Custom box */}
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-700
                              bg-white dark:bg-neutral-800
                              group-has-[input:checked]:bg-blue-600
                              group-has-[input:checked]:outline-blue-600
                              group-focus-within:outline-2
                              group-focus-within:outline-blue-600" aria-hidden="true">
                           {/* Checkmark */}
                           <svg className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100" viewBox="0 0 12 10"
                              fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 5l3 3 7-7" />
                           </svg>
                        </span>
                        <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                           I accept the
                        </span>
                     </label>
                        {errors.tmc && (
                            <p className="text-sm text-red-600"> {errors.tmc.message}</p>
                        )}

                     <a href="#"
                        className="ml-1 text-sm font-medium text-blue-700 dark:text-blue-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                        Terms and Conditions
                     </a>
                  </div>
               </div>

               <div className="mt-6">
                  <button type="submit"
                     className="py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                     Create an account</button>
               </div>
            </form>
         </div>
      </main>
   );
}