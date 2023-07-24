import { faFill } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Fill icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Fill = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFill} {...props} />;
};

export default Fill;
