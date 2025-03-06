import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { DialogDescription, DialogTitle, DialogHeader } from "./ui/dialog"
import Image from "next/image"

const SignInDialog = () => {
  const handleWithGoogleClick = () => signIn("google")
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conect-se usando sua conta do Google.
        </DialogDescription>
      </DialogHeader>
      <Button
        variant="outline"
        className="gap-1 font-bold"
        onClick={handleWithGoogleClick}
      >
        <Image src="/google.svg" width={18} height={18} alt="Google Login" />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
