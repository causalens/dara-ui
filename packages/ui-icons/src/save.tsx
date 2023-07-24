import { faSave } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Save icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Save = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSave} {...props} />;
};

export default Save;
