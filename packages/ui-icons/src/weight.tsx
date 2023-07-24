import { faWeight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Weight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Weight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWeight} {...props} />;
};

export default Weight;
