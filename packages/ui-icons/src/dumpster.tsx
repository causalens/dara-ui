import { faDumpster } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Dumpster icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Dumpster = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDumpster} {...props} />;
};

export default Dumpster;
