import { faTimesSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TimesSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TimesSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTimesSquare} {...props} />;
};

export default TimesSquare;
