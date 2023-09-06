import TextField from '@/app/components/ui/TextField';
import {FC} from 'react';

const SubscribeForm: FC = () => {
  return (
    <form
      className="rounded-md h-full bg-[url(/images/subscribe-background.jpg)] px-md py-lg bg-cover
        flex flex-col gap-md">
      <div className="text-center flex flex-col gap-[5px]">
        <p className="text-primary-lightVariant text-[28px] font-medium">
          Don't Miss Out
        </p>
        <p className="text-grey-300 leading-5">
          Our best homes sell fast, get personalized content first.
        </p>
      </div>
      <div className="flex flex-col gap-xs">
        <TextField placeholder="Example@gmail.com" label="E-mail" />
        <button className="btn-secondary">Subscribe</button>
      </div>
      <div className="text-sm text-center text-marine">
        I give Reviero permission to contact me & agree to the{' '}
        <a
          href="https://www.pacaso.com/terms-and-conditions"
          className="underline">
          terms
        </a>
        . This site is protected by reCAPTCHA and the Google{' '}
        <a href="https://policies.google.com/privacy" className="underline">
          privacy policy
        </a>
        , terms of service and{' '}
        <a href="https://www.pacaso.com/mobile-terms" className="underline">
          mobile terms
        </a>
        .
      </div>
    </form>
  );
};

export default SubscribeForm;
