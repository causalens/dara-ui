import { faDedent } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Dedent icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Dedent = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDedent} {...props} />;
};

export default Dedent;
