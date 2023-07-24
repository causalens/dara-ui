import { faTimesRectangle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TimesRectangle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TimesRectangle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTimesRectangle} {...props} />;
};

export default TimesRectangle;
