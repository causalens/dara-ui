import { faPills } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Pills icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Pills = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPills} {...props} />;
};

export default Pills;
