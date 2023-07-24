import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TimesCircle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TimesCircle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTimesCircle} {...props} />;
};

export default TimesCircle;
