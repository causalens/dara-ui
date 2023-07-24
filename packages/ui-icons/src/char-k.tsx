import { faK } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charK icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charK = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faK} {...props} />;
};

export default charK;
