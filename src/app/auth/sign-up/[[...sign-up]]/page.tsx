import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative no-scrollbar">
      <div
        className="absolute inset-0 bg-blur"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1623446713256-599eecb668ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
        }}
      />
      <section className="py-12">
        <div>
          <div className="flex justify-center">
            <SignUp
              appearance={{
                elements: {
                  formButtonPrimary:
                    "bg-red-500 hover:bg-red-600 text-sm normal-case",
                },
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
